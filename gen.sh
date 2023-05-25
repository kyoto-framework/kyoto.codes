

# Kyoto docs

echo "Generating kyoto-framework/kyoto docs ..."
python3 -m docsgen -r https://github.com/kyoto-framework/kyoto.git -o docs/kyoto
echo ""


# Zen docs
# As far as zen have subpackages, we can't provide repo address directly.
# In that case subpackages will be ignored.
# So, we need to clone first and use local copy.

# Cleanup & clone repo
rm -rf /tmp/zen
git clone https://github.com/kyoto-framework/zen.git /tmp/zen &> /dev/null
# Generate index docs
echo "Generating kyoto-framework/zen docs ..."
python3 -m docsgen -r /tmp/zen -o docs/zen
echo "" # Newline
# Generate subpackages docs
for f in /tmp/zen/*; do
    if [ -d "$f" ]; then # If folder
        PKG=$(echo $f | cut -d/ -f4) # Define package name
        echo "Generating kyoto-framework/zen/$PKG docs ..." # Log
        python3 -m docsgen -r /tmp/zen/$PKG -o docs/zen/$PKG -p zen/$PKG/ # Generate
        echo "" # Newline
    fi
done
