const N8N_WEBHOOK_URL = "/api/read-git";

// This function is called when the user clicks ENTER on React UI
export async function sendRepoUrlToN8N(repoUrl) {
  const res = await fetch(N8N_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ repoUrl }), // send repo URL to backend
  });

  if (!res.ok) {
    throw new Error("Failed to contact n8n backend");
  }

  return res.json();  // Expect JSON: { pdfUrl, docxUrl }
}
