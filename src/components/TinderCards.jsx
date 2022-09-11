import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import TinderCard from "react-tinder-card";
import './TinderCards.css';

function TinderCards() {
    //유저DB
    const [user,setUser] = useState([
        {
            name : '스티브 잡스',
            url : 'https://image.yes24.com/images/chyes/news/20111006/002.jpg'
        },
        {
            name : '일론 머스크',
            url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/225px-Elon_Musk_Royal_Society.jpg'
        }
    ]);
    const [currentIndex, setCurrentIndex] = useState(user.length-1)

    //어느 방향으로 swip 했는지 기록
    const [lastDirection, setLastDirection] = useState()
    //console.log(lastDirection)

    const currentIndexRef = useRef(currentIndex)
    
    

    const childRefs = useMemo(
        () =>
          Array(user.length)
            .fill(0)
            .map((i) => React.createRef()),
        []
      )

    const updateCurrentIndex = (val) => {
      setCurrentIndex(val)
      currentIndexRef.current = val
    }  

    //돌아가는 기능
    const canGoBack = currentIndex < user.length - 1

    // 인덱스 >= 0
    const canSwipe = currentIndex >= 0

    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
      }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < user.length) {
          await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
      }

    useEffect(()=>{        
        /* database.
        collection('people').
        onSnapshot((snapshot)=>(
            setUser(snapshot.docs.map(doc=>doc.data()))
        )) */
        //will run ONCE when the component load, and never agane
    },[]);

    //setUser([...user,'son','min'])

  return (
    <>
    <TinderCards_cardContainer>
      {user.map((person, index)=>(
        <TinderCard
        className="swipe"
        ref={childRefs[index]}
        key={person.name}
        preventSwipe={['up','down']}
        onSwipe={(dir) => swiped(dir, person.name, index)}
        onCardLeftScreen={() => outOfFrame(person.name, index)}

        >
            <Card 
            style={{ backgroundImage: `url(${person.url})` }}
            className="card">
                <h3>{person.name}</h3>

            </Card>
        </TinderCard>
      ))}
      <SwipeButtonsContainer>
      <SwipeButtons__left onClick={() => swipe('left')}>X</SwipeButtons__left>
      <SwipeButtons__view>상세보기</SwipeButtons__view>
      <SwipeButtons__right onClick={() => swipe('right')}>O</SwipeButtons__right>
    </SwipeButtonsContainer>
    </TinderCards_cardContainer>
    </>
  );
}

export default TinderCards;

const Card = styled.div`
    position : relative;
    width: 600px;
    padding: 20px;
    max-width: 85vw;
    height: 50vh;
    border-radius:20px;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
`

const TinderCards_cardContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5vh;

`

//버튼set
const SwipeButtonsContainer = styled.div`
  position: fixed;
  bottom:10vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`


const SwipeButtons__left = styled.button`
  background-color: red;
`

const SwipeButtons__view = styled.button`
 background-color: skyblue;
`

const SwipeButtons__right = styled.button`
 background-color:  green;
`
//버튼set