"use client";

import { useVapi } from "@/modules/widget/hooks/use-vapi";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const {
    isSpeaking,
    isConnected,
    isConnecting,
    transcript,
    endCall,
    startCall,
  } = useVapi();

  return (
    <div className="flex flex-col items-center justify-center min-h-svh max-w-md mx-auto w-full">
      <Button onClick={() => startCall()}>Start Call</Button>
      <Button variant={"destructive"} onClick={() => endCall()}>
        End Call
      </Button>
      <p>Is Connected: {`${isConnected}`}</p>
      <p>Is Connecting: {`${isConnecting}`}</p>
      <p>Is Speaking: {`${isSpeaking}`}</p>
      <p>{JSON.stringify(transcript, null, 2)}</p>
    </div>
  );
}
