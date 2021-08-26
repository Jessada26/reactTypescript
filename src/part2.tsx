
interface typeOfPart2 {
  sendToPart2:string
}

function Part2(props:typeOfPart2){
    const { sendToPart2 } = props;
    return<>
      {sendToPart2}
    </>
}

export default Part2;