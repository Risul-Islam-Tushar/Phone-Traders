import { useState } from "react";
import img from "../../assets/Shop.jpeg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MobileCard from "../../Component/MobileCard";
import useMobile from "../../Hook/useMobile";
import { Helmet } from "react-helmet";

const Shop = () => {
  const [tabIndex, settabIndex] = useState(0);
  const [mobile] = useMobile();
  const Apple = mobile.filter((item) => item.brand === "Apple");
  const Samsung = mobile.filter((item) => item.brand === "Samsung");
  const Google = mobile.filter((item) => item.brand === "Google");
  const OnePlus = mobile.filter((item) => item.brand === "OnePlus");
  const Xiaomi = mobile.filter((item) => item.brand === "Xiaomi");
  return (
    <div>
      <Helmet>
        <title>PHone Traders | Shop</title>
      </Helmet>
      <div>
        <img
          className="h-1/2 w-full rounded-b-md hero-overlay bg-opacity-60"
          src={img}
        />
      </div>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => settabIndex(index)}>
        <TabList className="text-center my-4 text-amber-500 ">
          <Tab>Apple</Tab>
          <Tab>Samsung</Tab>
          <Tab>Google</Tab>
          <Tab>OnePlus</Tab>
          <Tab>Xiomi</Tab>
        </TabList>
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-3 lg:grid-cols-3 ">
            {Apple.map((item) => (
              <MobileCard key={item._id} item={item}></MobileCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-3 lg:grid-cols-3">
            {Samsung.map((item) => (
              <MobileCard key={item._id} item={item}></MobileCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-3 lg:grid-cols-3">
            {Google.map((item) => (
              <MobileCard key={item._id} item={item}></MobileCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-3 lg:grid-cols-3">
            {OnePlus.map((item) => (
              <MobileCard key={item._id} item={item}></MobileCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-3 lg:grid-cols-3">
            {Xiaomi.map((item) => (
              <MobileCard key={item._id} item={item}></MobileCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
