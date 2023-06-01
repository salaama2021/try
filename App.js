import "./App.css";

function App() {
  return(
    <div className= "App">
      <div
      style= {{
        width:500,
        height:500,
        display:"flex",
        flexDirection:"row",
        backgroundColor:"white",
        justifyContent:"space-evenly",
        alignItems:"flex-end",
}}
>
  <div
  style= {{
    width:300, 
    height:300,
    backgroundColor:"yellow",
    border:"1px solid white",
  }}
  >
  </div>
  <div
  style= {{
    width:100,
    height:100,
    backgroundColor:"black",
    border:"1px solid white",
    alignSelf: "flex-end",
    flexGrow: 1,
  }}
>
  </div>
  <div
  style= {{
    width:100,
    height:100,
    backgroundColor:"pink",
    border:"1px solid white",
  }}
>
</div>
<div
  style= {{
    width:100, 
    height:100,
    backgroundColor:"orange",
    border:"1px solid white",
  }}
  >
  </div>
  <div
  style= {{
    width:100,
    height:100,
    backgroundColor:"blue",
    border:"1px solid white",
  }}
>
  </div>
  <div
  style= {{
    width:300,
    height:300,
    backgroundColor:"red",
    border:"1px solid white",
  }}
>






</div>
</div>
</div>
  );
}

export default App