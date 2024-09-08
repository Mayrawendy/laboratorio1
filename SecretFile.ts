(() => { 
    class SecretFile {
        secretMessage() {
            console.log("Shhh...");
        }
    }
    const secretFile = new SecretFile();
    secretFile.secretMessage();

})();