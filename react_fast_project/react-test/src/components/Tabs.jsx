export default function Tabs({childern,buttons,ButtonsContainer='menu'}){
  return(
    <>
    <ButtonsContainer>{buttons}</ButtonsContainer>
    {childern}
    </>
    )
}
