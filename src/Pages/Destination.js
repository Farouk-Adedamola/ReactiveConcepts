import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import media from "styled-media-query";
import background from "../Assets/background.svg";

const Wrapper = styled.section`
  padding: 10px 4vw 0 4vw;
  ${media.greaterThan("medium")`
  padding: 15px 50px 0 50px;
  `}
  ${media.greaterThan("large")`
  padding: 15px 90px 0 90px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  `}
  ${media.greaterThan("huge")`
  padding: 15px 150px 0 150px;
  `}
`;

const Contact = () => {
  return (
    <Fragment>
      <Wrapper>
        <Navbar />
        <h1>welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt
          assumenda similique, ipsa esse unde eligendi, facere eum ducimus quasi
          nostrum nulla consequatur, illo veritatis laboriosam impedit
          asperiores ex atque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Temporibus vitae, architecto soluta nesciunt fugiat
          ipsum asperiores pariatur minus esse quia delectus? Facere cumque a
          labore doloribus minus recusandae unde tenetur? Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Earum nemo iste illum dolores,
          dicta rerum consequuntur quo dolorum, quia magnam exercitationem
          ducimus tempore a quis cumque quisquam sit recusandae possimus? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Dolores asperiores
          recusandae eaque quam possimus consectetur odit assumenda incidunt
          maxime id veritatis provident ipsam expedita, praesentium ullam porro
          magni error ratione. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veniam, provident eaque at tempore suscipit vel,
          praesentium repellat blanditiis itaque maxime a alias repudiandae et,
          quisquam architecto ipsa? Impedit, autem dignissimos. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Voluptas vel quasi minima
          nemo. Perspiciatis placeat sapiente, ad blanditiis nam similique ea
          quaerat illo unde ex quos, adipisci dolorem. Praesentium, esse. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          architecto quis delectus quia eos minima ex doloremque culpa autem
          amet porro dolores et voluptates dicta animi nostrum odit. Quaerat,
          et. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Adipisci, iste dicta nihil, fugiat commodi quam, repellat quaerat
          tempora animi eius quidem? Sequi et commodi quas. Ea facilis quidem
          doloremque totam! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Explicabo officiis nulla debitis iusto. Repellat esse velit
          itaque distinctio ab eum ut hic amet molestiae, voluptatem quae qui
          corporis repudiandae aut. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Facilis assumenda cum nisi labore iure id delectus
          expedita, alias culpa! Magni eius doloremque fugiat illo repudiandae
          architecto, sapiente inventore nesciunt non. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Provident deserunt accusantium
          dolore eaque possimus corrupti assumenda facere sequi iusto maiores
          ullam ad amet sunt magnam facilis quo, debitis esse voluptatum? Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Maiores a iste
          nihil non aliquam unde est, vitae error temporibus distinctio
          architecto cum ipsum quos magnam ratione? Est sunt voluptate
          consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque asperiores sequi architecto nobis, fugiat incidunt
          necessitatibus itaque, eveniet adipisci, consequuntur cupiditate
          distinctio. Molestiae dolorem natus, reprehenderit eius corporis
          voluptates facere. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti molestias quos harum, vel accusamus nobis aspernatur
          delectus tempore autem deserunt reiciendis, labore laudantium est
          praesentium soluta similique, esse ipsa natus! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Iusto laborum corrupti esse,
          molestias, voluptatibus, odio fugit architecto repudiandae quasi rem
          nobis exercitationem quaerat molestiae rerum? Fugit similique
          blanditiis maxime eligendi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Impedit fugit, deleniti doloremque mollitia
          possimus, totam enim delectus blanditiis exercitationem maxime quidem!
          Necessitatibus quia fugit molestiae possimus fuga harum, quas est! lor
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          aspernatur voluptatibus recusandae. Eius necessitatibus odio ipsam
          amet unde quidem esse ex, dolore porro autem eveniet architecto nulla
          ipsa ad molestias. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Blanditiis, fuga unde nemo ullam in repudiandae illo molestiae
          ea recusandae. Ipsam nisi repudiandae tempora nihil error provident,
          doloremque deleniti at quod! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas vel nisi voluptatum neque expedita minima
          quod illo, ex reiciendis! Neque voluptatibus ipsam nemo facilis
          exercitationem officia qui nam tempore porro. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Cupiditate necessitatibus aperiam
          consequuntur corrupti suscipit, molestias inventore sit, ipsum tempore
          deserunt voluptate non laborum similique quo blanditiis nostrum quidem
          mollitia? Nisi. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Pariatur quisquam nisi numquam autem reprehenderit, praesentium
          molestias cum error in omnis quo ea deleniti quibusdam unde voluptatum
          veritatis iure voluptates mollitia. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Id corporis perspiciatis maxime impedit
          itaque dolorem excepturi illum consectetur eveniet repellat. Quia
          libero quo laborum placeat, neque numquam tempore fugiat dolorum?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          ullam, exercitationem deserunt placeat hic quia rerum labore itaque
          voluptates error quisquam eveniet incidunt quas molestias consequuntur
          laborum nesciunt iure deleniti?
        </p>
      </Wrapper>
    </Fragment>
  );
};

export default Contact;
