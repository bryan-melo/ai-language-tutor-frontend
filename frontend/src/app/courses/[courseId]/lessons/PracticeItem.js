import { useState } from "react";
import { Mic, Send } from "lucide-react";

export default function PracticeItem({ text }) {
  const [showChat, setShowChat] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { text: `Please say: "${text}"`, sender: "app" },
  ]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;
    // Add user message to chat
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { text: userInput, sender: "user" },
    ]);

   // Simulate sending the message to the server and getting a response
    setTimeout(() => {
      const feedbackMessage = `Your pronunciation of "${text}" was good, but try focusing more on the 'i' sound.`;
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: feedbackMessage, sender: "app" },
      ]);
      setUserInput("");
    }, 1000); // Simulate response delay
  };

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  if (recognition) {
    recognition.continuous = false;
    recognition.lang = "en-US"; 
    recognition.interimResults = false;
  }

  const handleMicClick = () => {
    if (!recognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setUserInput(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };
  };

  return (
    <div>
      <div className="flex justify-between items-center border rounded-lg px-4 py-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-600">
        <span className="text-gray-900 dark:text-white">{text}</span>
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-sm"
          onClick={() => setShowChat(!showChat)}
        >
          Practice
        </button>
      </div>

      {showChat && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl w-3/4 sm:w-1/2 max-w-3xl h-3/4 overflow-hidden flex flex-col border border-gray-300 dark:border-gray-600 shadow-2xl ring-1 ring-black/10 relative">
            {/* Close Button (Top Left Inside Chat Box) */}
            <button
              className="absolute top-3 left-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 text-2xl"
              onClick={() => setShowChat(false)}
            >
              &times;
            </button>

            <div className="flex-1 overflow-auto mt-5 p-8">
              <div className="space-y-4">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg max-w-xs ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white self-end"
                        : "bg-gray-200 dark:bg-gray-600 self-start text-gray-800 dark:text-gray-300"
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl border border-gray-300 dark:border-gray-600">
              <div className="flex flex-col">
                {/* Textarea (expands upward) */}
                <textarea
                  value={userInput}
                  onChange={handleInputChange}
                  placeholder="Type your response..."
                  rows={1}
                  className="w-full p-2 rounded-md resize-none overflow-y-auto dark:bg-gray-700 dark:text-white focus:outline-none border-none mb-2"
                  style={{ maxHeight: "8rem" }}
                />

                {/* Icons at bottom right */}
                <div className="flex justify-end gap-2">
                  <button
                    className="p-2 rounded-md bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500"
                    onClick={handleMicClick}
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
                    onClick={handleSendMessage}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
