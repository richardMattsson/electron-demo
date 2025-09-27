const information = document.getElementById('info');
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const func = async () => {
  const response = await window.versions.ping()
  console.log(response)
}

func()

const button = document.getElementById('button');
button.addEventListener('click', () => {
  if (information.innerText !== "You clicked the button! 🎉") {
    information.innerText = "You clicked the button! 🎉"
  } else {
    information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
  }
});