import React from 'react'
import { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';

export default function Practise() {

  const startListening = SpeechRecognition.startListening({ continuous: true })

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    console.log("browser error")
    return null
  }

  return (
    <div>
      <button onClick={startListening}>Start hearing</button>
    </div>
  )
}
