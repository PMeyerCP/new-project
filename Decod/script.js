document.getElementById("encryptButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    const encryptedText = btoa(inputText);
    document.getElementById("outputText").value = encryptedText;
});

document.getElementById("decryptButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    try {
        const decryptedText = atob(inputText);
        document.getElementById("outputText").value = decryptedText;
    } catch (e) {
        alert("Texto inválido para descriptografar!");
    }
});