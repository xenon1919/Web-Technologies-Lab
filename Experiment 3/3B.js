const fs = require("fs");

// Read files
function readFile() {
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
    } else {
      console.log("File content:", data);
    }
  });
}

// Create a new file
function createFile() {
  fs.writeFile("example.txt", "Hello, this is a newly created file!", (err) => {
    if (err) {
      console.error("Error creating file:", err);
    } else {
      console.log("File created successfully.");
    }
  });
}

// Update file (append content)
function updateFile() {
  fs.appendFile("example.txt", "\nAppended text!", (err) => {
    if (err) {
      console.error("Error updating file:", err);
    } else {
      console.log("File updated successfully.");
    }
  });
}

// Delete a file
function deleteFile() {
  fs.unlink("example.txt", (err) => {
    if (err) {
      console.error("Error deleting file:", err);
    } else {
      console.log("File deleted successfully.");
    }
  });
}

// Rename a file
function renameFile() {
  fs.rename("example.txt", "renamed_example.txt", (err) => {
    if (err) {
      console.error("Error renaming file:", err);
    } else {
      console.log("File renamed successfully.");
    }
  });
}

// Call the functions
createFile(); // Creates the file
setTimeout(readFile, 1000); // Reads the file after 1 second
setTimeout(updateFile, 2000); // Updates the file after 2 seconds
setTimeout(renameFile, 3000); // Renames the file after 3 seconds
setTimeout(deleteFile, 4000); // Deletes the file after 4 seconds
