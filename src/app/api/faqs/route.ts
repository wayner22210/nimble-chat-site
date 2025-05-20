cd ~/nimble-chat-site

# Make a data folder
mkdir -p src/data

# Add your real FAQ entries
cat > src/data/faqs.json << 'EOF'
[
  {
    "question": "What is Nimble Chat?",
    "answer": "An AI-powered chat and appointment booking assistant that integrates seamlessly into your website."
  },
  {
    "question": "How do I integrate Nimble Chat?",
    "answer": "Copy the embed snippet into your page or call our REST API—no server setup required."
  },
  {
    "question": "Is there a free tier?",
    "answer": "Yes! Our Free plan includes basic chat support for up to 5,000 monthly messages."
  }
]
EOF
