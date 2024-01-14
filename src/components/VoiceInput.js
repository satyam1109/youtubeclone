import React from "react";
import { useEffect, useRef } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSelector, useDispatch } from "react-redux";
import { setVoiceActiveFalse } from "../redux/searchquery";
import { setButtonCategory } from "../redux/searchquery";

export default function VoiceInput() {
  const dispatch = useDispatch();

  const voiceActive = useSelector((store) => store.query.voiceActive);

  const {
    transcript,
    browserSupportsSpeechRecognition,
    resetTranscript,
    listening,
  } = useSpeechRecognition();
  const transcriptRef = useRef(transcript);

  useEffect(() => {
    transcriptRef.current = transcript;
  }, [transcript]);

  useEffect(() => {
    if (voiceActive) {
      SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
      setTimeout(() => {
        if (transcriptRef.current) {
          dispatch(setButtonCategory(transcriptRef.current));
        }
        dispatch(setVoiceActiveFalse());
      }, 7000);
    }
    if (!voiceActive) {
      SpeechRecognition.stopListening();
      resetTranscript();
    }
  }, [voiceActive]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return voiceActive ? (
    <div className="fixed left-1/3 shadow-xl wx-1/3 mt-2">
      <div className="flex items-center justify-center bg-white ">
        <div className="h-80 flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="p-8">
              {(!transcriptRef.current) ? (<p className="text-xl font-sans">Loading...</p>): <p className="text-xl font-sans">{transcript}</p>}
            
            </div>
            <button
              onClick={() => dispatch(setVoiceActiveFalse())}
              className="bg-gray-200 rounded-full p-1 px-3 hover:bg-gray-300 absolute top-0 right-0 m-2"
            >
              X
            </button>
          </div>

          <div className="mb-12 flex justify-center items-center ">
            <img src="https://i.stack.imgur.com/S9FLH.jpg" className="w-1/2" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
