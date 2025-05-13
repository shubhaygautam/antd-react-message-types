export const imageWithButton = {
  payload: [{
    title: "Aggressive Exteriors",
    subtitle: "This car has wonderful exteriors",
    imageUrl: "https://maruti-oriserve-images.s3.ap-south-1.amazonaws.com/Spyder_WhatsApp_700x415.jpg",
    buttons: [
      {
        url: "https://www.google.com/",
        type: "link",
        text: "Visit Google"
      },
      {
        type: "default",
        text: "Do Nothing",
      }
    ]
  },
  {
    lang: "hindi",
    title: "Aggressive Exteriors",
    subtitle: "This car has wonderful exteriors",
    url: "https://www.youtube.com/embed/SSea5vciZjU",
    buttons: [
      {
        url: "https://www.google.com/",
        type: "link",
        text: "Visit Google"
      },
      {
        type: "default",
        text: "Do Nothing",
      }
    ]
  }
]
}

export const videoWithButton = {
  payload: {
    title: "Aggressive Exteriors",
    subtitle: "This car has wonderful exteriors",
    url: "https://www.youtube.com/embed/SSea5vciZjU",
    buttons: [
      {
        url: "https://www.google.com/",
        type: "link",
        text: "Visit Google"
      },
      {
        type: "default",
        text: "Do Nothing",
      }
    ]
  }
}

export const checkboxWithMedia = {
  payload: {
    title: "Aggressive Exteriors",
    subtitle: "This car has wonderful exteriors",
    imageUrl: "https://maruti-oriserve-images.s3.ap-south-1.amazonaws.com/Spyder_WhatsApp_700x415.jpg",
    options: [
      { value: '1', label: 'hello world' },
      { value: '2', label: 'hii i am vivek' },
      { value: '5', label: 'playing cricket in ahmedabad india. do you want to play cricket please tell me' },
      { value: '3', label: 'how are you ?' },
      { value: '4', label: 'working hour' },
    ],
    buttons: [
      {
        url: "https://www.google.com/",
        type: "link",
        text: "Visit Google"
      },
      {
        type: "default",
        text: "Do Nothing",
      }
    ]
  }
}

export const listWithMedia = {
  payload: {
    title: "Aggressive Exteriors",
    subtitle: "This car has wonderful exteriors",
    imageUrl: "https://maruti-oriserve-images.s3.ap-south-1.amazonaws.com/Spyder_WhatsApp_700x415.jpg",
    list: [
      { label: "hello world" },
      { label: "playing cricket in ahmedabad india. do you want to play cricket please tell me" },
      { label: "how are you ?" },
      { label: "vivasi" }
    ],
    buttons: [
      {
        url: "https://www.google.com/",
        type: "link",
        text: "Visit Google"
      },
      {
        type: "default",
        text: "Do Nothing",
      }
    ]
  }
}

export const listMessage = {
  payload: {
    list: [
      { label: "hello world" },
      { label: "playing cricket in ahmedabad india. do you want to play cricket please tell me" },
      { label: "how are you ?" },
      { label: "vivasi" }
    ]
  }
}

export const listWithButtons = {
  payload: {
    title: "Aggressive Exteriors",
    subtitle: "This car has wonderful exteriors",
    list: [
      { label: "hello world" },
      { label: "playing cricket in ahmedabad india. do you want to play cricket please tell me" },
      { label: "how are you ?" },
      { label: "vivasi" }
    ],
    buttons: [
      {
        url: "https://www.google.com/",
        type: "link",
        text: "Visit Google"
      },
      {
        type: "default",
        text: "Do Nothing",
      }
    ]
  }
}
