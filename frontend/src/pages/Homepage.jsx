import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Link } from "@chakra-ui/react";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
export const Homepage = () => {
  return (
    <Wrapper>
      <HeadImage>
        <Overlay />
        <HeadContainer>
          <div style={{ paddingTop: "10px" }}>
            <h1>Rent Thousands of Games </h1>
            <h4>NO LATE FEES. CANCEL ANYTIME.</h4>
          </div>
          <div>
            <SubscriptionButton>START FREE TRIAL</SubscriptionButton>
          </div>
          <div>
            <p>
              Buy consoles, controllers, arcades, new games, and gaming
              collectibles
            </p>
          </div>
        </HeadContainer>
      </HeadImage>
      <Header>
        <h2>
          We now sell consoles, controllers, games, and collectibles for gamers
        </h2>
      </Header>
      <ShoppingGrid>
        <Product>
          <h3>New Games</h3>
          <ProductImage
            src="https://gamefly.gameflycdn.com/shared/retail/images/nmhp/products-new-games.png"
            alt="new games"
          />
          <Link href="/products">
            <ShopButton>Shop Now</ShopButton>
          </Link>
        </Product>
        <Product>
          <h3>Controllers & Accessories</h3>
          <ProductImage
            src="https://gamefly.gameflycdn.com/shared/retail/images/nmhp/products-controllers.png"
            alt="controllers"
          />
          <Link href="/products">
            <ShopButton>Shop Now</ShopButton>
          </Link>
        </Product>
        <Product>
          <h3>Collectibles</h3>
          <ProductImage
            src="https://gamefly.gameflycdn.com/shared/retail/images/nmhp/products-collectibles.png"
            alt="collectibles"
          />
          <Link href="/products">
            <ShopButton>Shop Now</ShopButton>
          </Link>
        </Product>
      </ShoppingGrid>
      <FeatureGrid>
        <Feature>
          <FeatureImage
            src="https://gamefly.gameflycdn.com/assets/theme/icon-hiw-shipping-light.png"
            alt="shipping icon"
          />
          <p>
            Rush Your Games To You <br />
            FREE Shipping
          </p>
        </Feature>
        <Feature>
          <FeatureImage
            src="https://gamefly.gameflycdn.com/assets/theme/icon-hiw-discs-light.png"
            alt="swap icon"
          />
          <p>
            Swap Games Anytime <br />
            Thousands To Choose From
          </p>
        </Feature>
        <Feature>
          <FeatureImage
            src="https://gamefly.gameflycdn.com/assets/theme/icon-hiw-discount-light.png"
            alt="discount icon"
          />
          <p>
            Keep The Games You Love <br /> With A Great Discount
          </p>
        </Feature>
      </FeatureGrid>
      <SpecialOffer>
        <span>RENT THOUSANDS OF GAMES & MOVIES</span>
        <button
          style={{
            backgroundColor: "orange",
            color: "white",
            border: "none",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          START FREE TRIAL
        </button>
        <span>NO LATE FEES. CANCEL ANYTIME.</span>
      </SpecialOffer>
      <Section>
        <h4>Video Game Rentals & Used Video Games | GameSphere</h4>
        <h5>
          GameSphere is your go-to source for new and classic movie and video game
          rentals. With thousands of titles to choose from, you can rent films
          or new and used video games without worrying about any late fees. If
          you like your rented game or movie enough, you can even choose to keep
          it for a low, pre-owned price. Not happy with your rental? Send it
          back, and we’ll rush your next movie or video game rental to your
          doorstep for free, so you can watch your flick or get your game on
          ASAP. Whether you play one of today’s hottest systems or enjoy the
          nostalgia of systems past, you’ll find all the best new and used video
          games at GameSphere. Start your free trial today!
        </h5>
      </Section>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 200vh;
  background-color: white;
  font-family: 'Roboto', sans-serif;
`;

const HeadImage = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-image: url("https://gamefly.gameflycdn.com/shared/retail/images/nmhp/hero.jpg");
  background-size: cover;

  @media (max-width: 1024px) {
    height: 400px; 
  }

  @media (max-width: 768px) {
    height: 300px; /
  }

  @media (max-width: 480px) {
    height: calc(600px + 5%);
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: calc(600px + 5%); 
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const HeadContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 560px) {
    padding: 0 10px; 
  }

  h1 {
    font-size: 50px;
    @media (max-width: 1024px) {
      font-size: 40px; 
    }

    @media (max-width: 768px) {
      font-size: 30px; /
    }
  }

  h4 {
    font-size: 30px;
    color: white;
    @media (max-width: 1024px) {
      font-size: 24px; 
    }

    @media (max-width: 768px) {
      font-size: 20px; 
    }
  }

  p {
    font-size: 18px;
    margin-top: 40px;
    @media (max-width: 1024px) {
      font-size: 16px; 
    }

    @media (max-width: 768px) {
      font-size: 14px; 
    }
  }
`;

const SubscriptionButton = styled.button`
  color: white;
  font-size: 25px;
  background-color: orange;
  padding: 10px 35px;
  margin-top: 30px;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  @media (max-width: 1024px) {
    font-size: 22px;
    padding: 8px 30px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 6px 25px;
  }
`;

const Header = styled.div`
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #000000;
  font-size: 26px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 22px;
    text-align: center; /* Center text on smaller screens */
  }
`;

const SpecialOffer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  color: #000000;
  margin-top: 40px;
  padding-right: 120px;

  span {
    font-size: 20px;
    font-weight: 700;
    line-height: 31px;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-right: 20px;
  }
`;

const OfferText = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  span {
    display: block;
    margin-bottom: 10px;
  }
`;

const ShoppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Product = styled.div`
  text-align: center;
  background-color: #ffffff;
  color: #252525;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 20px;
  border-radius: 8px;

  h3 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
  }
`;

const ShopButton = styled.button`
  height: 35px;
  width: 240px;
  background-color: tomato;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ProductImage = styled.img`
  height: 300px;
  width: 380px;
  max-width: 100%;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  text-align: center;
  background-color: #ffffff;
  color: #7d7d7d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  p {
    font-size: 17px;
    margin-bottom: 15px;
  }
`;

const FeatureImage = styled.img`
  width: 240px;
  height: 120px;
`;

const Section = styled.div`
  background-color: #ffffff;
  color: #000000;
  padding-left: 12px;
  margin-top: 40px;
  font-size: 17px;
  font-weight: 600;

  h4 {
    font-size: 22px;
  }

  h5 {
    font-weight: 200;
    margin-top: 10px;
    font-size: 16px;
    color: #817d7d;
  }

  @media (max-width: 768px) {
    padding-left: 8px;

    h4 {
      font-size: 18px;
    }

    h5 {
      font-size: 14px;
    }
  }
`;
