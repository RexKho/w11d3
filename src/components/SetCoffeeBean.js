import {useEffect} from "react";
import { useCoffeeContext } from "../context/CoffeeContext";
import { CoffeeProvider } from "../context/CoffeeContext";

const SetCoffeeBean = ({ coffeeBeans }) => {
  const { coffeeBean, setCoffeeBeanId } = useCoffeeContext();
  // useEffect(() => {
  //   console.log(`fetching new data about ${familyName}`);
  //   const f = async () => {
  //     const fetchedData = await fetchPosts();
  //     setData(fetchedData);
  //   };
  //   f();
  // }, [familyName]);

// useEffect(() => {
//   setCoffeeBean(coffeeBean)

// }, [coffeBean]);

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select name="coffee-bean" value={coffeeBean.id} onChange={(e)=>setCoffeeBeanId(e.target.value)}>
        {coffeeBeans.map(bean => (
          <option key={bean.id} value={bean.id}>
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}
//bean.id
export default SetCoffeeBean;
