const intialState = [
  {
    name: "Gulab Jamun",
    price: "20",
    image:
      "https://media.istockphoto.com/id/1194662949/photo/indian-dessert-or-sweet-dish-gulab-jamun-in-white-bowl-on-yellow-background.jpg?s=612x612&w=0&k=20&c=XAOQkQC-Mu-XXviGtWU6NTz8vZzT1sY0oaJQ4jWo2Fo= ",
  },
  {
    name: "Gajar Ka Halwa",
    price: "150",
    image:
      "https://www.shutterstock.com/image-photo/gajar-ka-halwa-carrotbased-sweet-600nw-759925777.jpg ",
  },
  {
    name: "Sandesh",
    price: "180",
    image:
      "https://media.istockphoto.com/id/469850785/photo/sandesh-a-bengali-sweet-dish.jpg?s=612x612&w=0&k=20&c=4XVDOeusX_yTVyJZlSWP8U_Gz0EHg7HLPDa7annjNik= ",
  },
  {
    name: "Modak",
    price: "80",
    image:
      "https://media.istockphoto.com/id/1265214271/photo/modak-a-traditional-dish-made-on-ganpati-festival-in-india.jpg?s=612x612&w=0&k=20&c=fUCWOoLJPik-CaLFg26MqMUKpqhL9PULqAhLAf4IJKA= ",
  },
  {
    name: "Ice Cream",
    price: "150",
    image:"https://t4.ftcdn.net/jpg/06/15/69/85/360_F_615698552_jqO2rh2uigkhb8ZLKTmTRLeeBQKtnehC.jpg"
  },
  {
    name:"Creame Brulee",
    price:"200",
    image:"https://cdn.pixabay.com/photo/2018/06/22/14/44/creme-brulee-3490886_640.jpg"

  }
,
{
  name:"Baked caked Blueberries",
  price:"250",
  image:"https://cdn.pixabay.com/photo/2016/11/21/16/59/baked-goods-1846460_640.jpg"

}

,{

  name:"ColorFul Maracorns",
  price:"300",
  image:"https://cdn.pixabay.com/photo/2016/11/18/17/20/colorful-1835921_640.jpg"
}
,{

  name:"Creame Corn",
  price:"160",
  image:"https://cdn.pixabay.com/photo/2018/05/10/22/42/ice-cream-3389010_640.jpg"
}

,{

  name:"Cupcake Muffins",
  price:"500",
  image:"https://cdn.pixabay.com/photo/2018/05/10/22/42/ice-cream-3389010_640.jpg"
}

,{

  name:"Cnadle Sweetmets",
  price:"230",
  image:"https://cdn.pixabay.com/photo/2017/01/04/19/41/candes-1952997_640.jpg"
}

,{

  name:"Cookies with Jam",
  price:"60",
  image:"https://plus.unsplash.com/premium_photo-1671399556247-d1cc24a93cbd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzc2VydHN8ZW58MHx8MHx8fDA%3D"
}

















];


































const dessertReducer = (state = intialState, action) => {
  switch (action.payload) {
    default: {
      return state;
    }
  }
};
export default dessertReducer;
