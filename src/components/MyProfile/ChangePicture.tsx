import { useState } from 'react'
import { storage } from '../../utils/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

function ChangePicture() {
  const [image, setImage] = useState<Blob | null>(null)
  const [url, setUrl] = useState('')

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit = () => {
    if (image) {
      const imageRef = ref(storage, 'image')
      uploadBytes(imageRef, image)
        .then(() => {
          getDownloadURL(imageRef)
            .then((url: string) => {
              setUrl(url)
            })
            .catch((err: any) => {
              console.log(err.message, 'error getting the image url')
            })
          setImage(null)
        })
        .catch((err: any) => {
          console.log(err.message)
        })
    }
  }

  return (
    <div>
      <img src={url} alt='img'></img>
      <input type='file' onChange={handleImageChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ChangePicture
