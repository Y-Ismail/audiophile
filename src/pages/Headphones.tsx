import Button from "../components/Button";
import Product from "../components/Product";
import Topic from "../components/Topic";

function Headphones() {
  return (
    <>
      <Topic topic="HEADPHONES" />
      <Product
        prodname="XX99 Mark II
Headphones"
        proddescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        class="xx9product"
        part='/product/ii'
      />
      <Product 
        prodname="XX99 Mark I
Headphones"
        proddescription="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        class="xx9product1"
        part='/product/mark2'
      />
      <Product
        prodname="XX59 Headphones"
        proddescription="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        class="xx59product"
        part='/pro'
      />
    </>
  );
}

export default Headphones;
