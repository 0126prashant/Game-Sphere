import React from 'react';
import styled from 'styled-components';

export const Homepage = () => {
  return (
    <Wrapper>
      <Header>
        <h2>We now sells consoles, controllers, games, and collectibles for gamers</h2>
      </Header>
      <ProductGrid>
        <Product>
          <h3>New Games</h3>
          <ProductImage src="https://gamefly.gameflycdn.com/shared/retail/images/nmhp/products-new-games.png" alt="new games" />
          <ShopButton>Shop Now</ShopButton>
        </Product>
        <Product>
          <h3>Controllers & Accessories</h3>
          <ProductImage src="https://gamefly.gameflycdn.com/shared/retail/images/nmhp/products-controllers.png" alt="controllers" />
          <ShopButton>Shop Now</ShopButton>
        </Product>
        <Product>
          <h3>Collectibles</h3>
          <ProductImage src="https://gamefly.gameflycdn.com/shared/retail/images/nmhp/products-collectibles.png" alt="collectibles" />
          <ShopButton>Shop Now</ShopButton>
        </Product>
        <Feature>
          <FeatureImage src="https://gamefly.gameflycdn.com/assets/theme/icon-hiw-shipping-light.png" alt="shipping icon" />
          <p>Rush Your Games To You <br />FREE Shipping</p>
        </Feature>
        <Feature>
          <FeatureImage src="https://gamefly.gameflycdn.com/assets/theme/icon-hiw-discs-light.png" alt="swap icon" />
          <p>Swap Games Anytime <br />Thousands To Choose From</p>
        </Feature>
        <Feature>
          <FeatureImage src="https://gamefly.gameflycdn.com/assets/theme/icon-hiw-discount-light.png" alt="discount icon" />
          <p>Keep The Games You Love <br /> With A Great Discount</p>
        </Feature>
      </ProductGrid>
      <SpecialOffer>
        <span>EXCLUSIVE OFFER: Rent Thousands of Games & Movies</span>
        <StartTrialButton>Start Free Trial</StartTrialButton>
        <span>NO LATE FEES. CANCEL ANYTIME.</span>
      </SpecialOffer>
      <Section>
        <h4>Video Game Rentals & Used Video Games | GameFly</h4>
        <h5>GameFly is your go-to source for new and classic movie and video game rentals. With thousands of titles to choose from, you can rent films or new and used video games without worrying about any late fees. If you like your rented game or movie enough, you can even choose to keep it for a low, pre-owned price. Not happy with your rental? Send it back, and we’ll rush your next movie or video game rental to your doorstep for free, so you can watch your flick or get your game on ASAP. Whether you play one of today’s hottest systems or enjoy the nostalgia of systems past, you’ll find all the best new and used video games at GameFly. Start your free trial today!</h5>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 200vh;
  background-color: white;
  margin-top: 8vh;
`;

const Header = styled.div`
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  color: #000000;
  font-size: 26px;
  font-weight: 600;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Product = styled.div`
  text-align: center;
  background-color: #FFFFFF;
  color: #252525;

  h3 {
    font-size: 20px;
    font-weight: 500;
  }
`;

const ProductImage = styled.img`
  height: 300px;
  width: 380px;
  max-width: 100%;
`;

const ShopButton = styled.button`
  height: 35px;
  width: 220px;
  background-color: tomato;
  color: #FFFFFF;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

const Feature = styled.div`
  text-align: center;
  background-color: #FFFFFF;
  color: #7D7D7D;

  p {
    font-size: 17px;
  }
`;

const FeatureImage = styled.img`
  width: 240px;
  height: 120px;
`;

const SpecialOffer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  color: #000000;
  margin-top: 40px;
  padding-right: 120px;

  span {
    font-size: 20px;
    font-weight: 700;
    line-height: 31px;
    text-align: center;
  }
`;

const StartTrialButton = styled.button`
  width: 249px;
  height: 56px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1.2px;
  background-color: tomato;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  margin-top: 100px;
`;

const Section = styled.div`
  background-color: #FFFFFF;
  color: #000000;
  padding-left: 12px;
  margin-top: 40px;
  font-size: 17px;
  font-weight: 600;

  h5 {
    font-weight: 200;
    margin-top: 10px;
    font-size: 14px;
    color: #817d7d;
  }
`;
