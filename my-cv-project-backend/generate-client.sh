#!/bin/bash
# Create logs directory if it doesn't exist
mkdir -p generated-logs

# Create log file
LOG_FILE="generated-logs/generate-client_$(date +%Y%m%d_%H%M%S).log"
echo "Started: $(date)" > $LOG_FILE

# Check if server is running
echo "🔃 Checking server connection..." | tee -a $LOG_FILE
if ! curl -s --head http://localhost:8080/swagger.json > /dev/null; then
  echo "❌ Cannot connect to server. Please make sure the server is running" | tee -a $LOG_FILE
  exit 1
fi

# Download swagger.json
echo "🔃 Downloading swagger.json..." | tee -a $LOG_FILE
curl -s http://localhost:8080/swagger.json -o swagger.json
if [ $? -ne 0 ]; then
  echo "❌ Error downloading swagger.json" | tee -a $LOG_FILE
  exit 1
fi
echo "✅ Successfully downloaded swagger.json" | tee -a $LOG_FILE

# Generate API client
echo "🔃 Generating API client..." | tee -a $LOG_FILE
npx @openapitools/openapi-generator-cli generate \
  -i swagger.json \
  -g typescript-fetch \
  -o generated-api \
  --additional-properties=supportsES6=true,typescriptThreePlus=true,withInterfaces=true,basePath=api

if [ $? -ne 0 ]; then
  echo "❌ Error generating API client" | tee -a $LOG_FILE
  exit 1
fi
echo "✅ API client generated successfully" | tee -a $LOG_FILE

# Move file from A to B
move_file() {
  local source=$1
  local destination=$2
  
  echo "🔃 Moving from $source to $destination..." | tee -a $LOG_FILE
  if [ -e "$source" ]; then
    # Remove destination if it exists to avoid nested directory (e.g. service/generated-api)
    if [ -d "$destination" ] || [ -f "$destination" ]; then
      rm -rf "$destination"
    fi
    
    # Ensure destination parent directory exists
    mkdir -p "$(dirname "$destination")"
    
    mv "$source" "$destination"
    echo "✅ Move successful" | tee -a $LOG_FILE
    echo "✅ API client generated at: ../my-cv-project-frontend/src/service/generated-api"
  else
    echo "❌ Source not found: $source" | tee -a $LOG_FILE
    return 1
  fi
}

# Use move_file function
move_file "generated-api" "../my-cv-project-frontend/src/service/generated-api"

echo "✅ Process completed successfully" | tee -a $LOG_FILE