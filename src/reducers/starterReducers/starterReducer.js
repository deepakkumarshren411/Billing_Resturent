const intialState = [
  {
    name: "Kebabs",
    price: "200",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSpCLSrhVG5mfsdF-Yb98VuhJ4lddoiBdJw&s ",
  },
  {
    name: "Panner Tikka",
    price: "150",
    image:
      " https://media.istockphoto.com/id/1186759790/photo/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-tikka-is-an-indian.jpg?s=612x612&w=0&k=20&c=cITToqM1KEnrixXjoLhEciqP24SxdKtW3QXykq-W5OE=",
  },
  {
    name: "Samosa",
    price: "80",
    image:
      " https://media.istockphoto.com/id/502663991/photo/punjabi-samosa-23.jpg?s=612x612&w=0&k=20&c=Ne0ArOpa-4L2N-INtPnq371fFZoM6qWW6R4ryN9TWW0=",
  },
  {
    name: "Khandvi",
    price: "210",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2TZiid5kk80BxSOTMzojuqF5HcTjYCjb7Q&s ",
  },
  

];

const starterReducer = (state = intialState, action) => {
  switch (action.payload) {
    default: {
      return state;
    }
  }
};
export default starterReducer;
