from fastapi import FastAPI
from fastapi.responses import FileResponse
import speech_recognition as sr
from moviepy.editor import VideoFileClip, TextClip, CompositeVideoClip
from gtts import gTTS
import os

app = FastAPI()

@app.post("/text-to-speech/")
async def text_to_speech(text: str = ""):
    # Load the video file
    video_path = "assets/brainrot.mp4" 

    # Convert text to speech
    tts = gTTS(text=text, lang='en')
    audio_path = f"assets/audio.mp3"
    tts.save(audio_path)

    # Create subtitles
    subtitle_clip = TextClip(text, fontsize=24, color='white')
    subtitle_clip = subtitle_clip.set_position(('bottom')).set_duration(VideoFileClip(video_path).duration)

    # Overlay subtitles on video
    video_clip = VideoFileClip(video_path)
    final_video = CompositeVideoClip([video_clip, subtitle_clip])
    final_video_path = "assets/processed_brainrot.mp4" 
    final_video.write_videofile(final_video_path, audio=audio_path)

    # Clean up temporary files
    os.remove(audio_path)

    return {"video_with_subtitles": final_video_path}