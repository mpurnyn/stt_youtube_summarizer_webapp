# stt_youtube_summarizer_webapp
An app that summarizes your youtube subscribed videos for the day. For Assembly AI Hackathon

# env
    sudo apt install python3.9 unzip
    python3.9 -m venv .venv
    source .venv/bin/activate 
    pip install -m requirements

# pynecone init
initiatilize pynecone framework
    pc init

# start pynecone webapp
first run will take a while to install bun dependencies
    pc run

MVP
1. Grab a list of videos from Youtube subscription.
2. Display the days videos.
3. Button to summarize video.
4. video is transcripted by assembly ai.
5. Video is summarized.
6. Summary is displayed to user.