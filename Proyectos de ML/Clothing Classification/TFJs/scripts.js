let net;
const imgEl = document.getElementById('img')
const descripcion = document.getElementById('descripcion_imagen')

const app = async () => {
    net = await mobilenet.load()
    displayImagePrediction()
}

imgEl.onload = async () => {
    displayImagePrediction()
}

const displayImagePrediction = async () => {
    try {
        const result = await net.classify(imgEl)
        console.log(result)

        descripcion.innerHTML = JSON.stringify(result)
    } catch (error) {
        console.log(error)
    }
}
app()