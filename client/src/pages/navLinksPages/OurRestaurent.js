import React from "react";
import Menu from "../../assets/menu.png";
import Navbar from "../../components/Common/navbar";
import Footer from "../../components/Footer";

const OurRestaurent = () => {
  const menuData = {
    soups: [
      { name: "Chicken corn soup", price: "500 / 1600" },
      { name: "Hot & sour soup", price: "500 / 1600" },
    ],
    snacks: [
      { name: "French fries (serving 2)", price: "400" },
      { name: "Spicy fries (serving 2)", price: "450" },
      { name: "Chicken pakora", price: "800" },
      { name: "Mix pakora", price: "500" },
      { name: "Namak paray", price: "300" },
      { name: "Chicken mayo roll", price: "500" },
      { name: "Chicken cheese roll", price: "600" },
    ],
    breakfast: [
      { name: "Egg potato bhujia", price: "450" },
      { name: "Aalu bhujia", price: "300" },
      { name: "Lahori chanay", price: "400" },
      { name: "Omlatte", price: "250" },
      { name: "Cheese omellete", price: "350" },
      { name: "Fried egg", price: "200" },
      { name: "Boiled egg", price: "150" },
      { name: "Paratha", price: "120" },
    ],
    desiCourse: [
      { name: "Chicken karahi", price: "1400 / 2700" },
      { name: "Chicken koila karahi", price: "1500 / 2800" },
      { name: "Chicken white karahi", price: "1600 / 3000" },
      { name: "Chicken black pepper", price: "1600 / 3000" },
      { name: "Chicken handi", price: "3000" },
      { name: "Chicken makhni handi", price: "3400" },
      { name: "Chicken qorma", price: "1300 / 2500" },
      { name: "Chicken ginger", price: "1400" },
      { name: "Chicken biryani (serving 1)", price: "650" },
      { name: "Chicken pulao (serving 1)", price: "650" },
      { name: "Zeera rice (serving 1)", price: "400" },
      { name: "Daal maash (serving 1)", price: "600" },
      { name: "Daal chana (serving 1)", price: "600" },
      { name: "Lobia (serving 1)", price: "600" },
    ],
    bbqCorner: [
      { name: "Chicken tikka", price: "625" },
      { name: "Chicken boti (12 pieces)", price: "1700" },
      { name: "Malai boti (12 pieces)", price: "1850" },
      { name: "Cheese boti (12 pieces)", price: "1850" },
      { name: "Chicken kabab (4 pieces)", price: "1200" },
      { name: "Reshmi kabab (4 pieces)", price: "1400" },
      { name: "Trout kg (farm)", price: "3500" },
    ],
    tandoor: [
      { name: "Roghni naan", price: "140" },
      { name: "Garlic naan", price: "140" },
      { name: "Kalwanji naan", price: "140" },
      { name: "Plain naan", price: "80" },
      { name: "Tandoori paratha", price: "160" },
      { name: "Tandoori roti", price: "60" },
      { name: "Roomali chapati", price: "80" },
    ],
    drinks: [
      { name: "Karak chai", price: "150" },
      { name: "Doodh patti", price: "200" },
      { name: "Green tea", price: "100" },
      { name: "Special coffee", price: "350" },
      { name: "Water (1.5 ltr)", price: "180" },
      { name: "Water (0.5 ltr)", price: "100" },
      { name: "Soft drink (tin)", price: "160" },
      { name: "Sting", price: "200" },
      { name: "Fresh lime", price: "200" },
    ],
    sides: [
      { name: "Raita", price: "160" },
      { name: "Fresh salad", price: "180" },
    ],
    sweetTooth: [
      { name: "Makhadi halwa (serving 2)", price: "500" },
      { name: "Kheer (serving 2)", price: "350" },
    ],
  };

  const Section = ({ title, items, bgColor }) => (
    <div className={`py-6 px-4 ${bgColor ? bgColor : "bg-white"}`}>
      <h2 className="text-center text-xl font-semibold mb-4">{title}</h2>
      <ul className="max-w-2xl mx-auto space-y-1">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex justify-between border-b border-dotted border-gray-400 pb-1"
          >
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div
        className="relative h-[200px] md:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Menu})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Centered Heading */}
        <div className="absolute bottom-10 w-full text-center text-white z-10">
          <h2 className="text-4xl md:text-5xl font-serif">Our Restaurent</h2>
        </div>
      </div>

      <div className="bg-[#dbeaff] py-10 flex flex-col items-center justify-center px-4">
        <p className="max-w-3xl text-center text-sm md:text-lg text-gray-800 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
          mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
          nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
          felis id augue sit cursus pellentesque enim
        </p>
        <h2 className="text-4xl mt-10 text-blue-800 font-serif drop-shadow-md">
          Menu
        </h2>
      </div>

      <div className="text-gray-800 font-serif">
        <Section title="Soups" items={menuData.soups} />
        <Section title="Snacks" items={menuData.snacks} />
        <Section
          title="Breakfast"
          items={menuData.breakfast}
          bgColor="bg-blue-100"
        />
        <Section title="Desi Course" items={menuData.desiCourse} />
        <Section
          title="BBQ Corner"
          items={menuData.bbqCorner}
          bgColor="bg-blue-100"
        />
        <Section title="Tandoor" items={menuData.tandoor} />
        <Section title="Drinks" items={menuData.drinks} bgColor="bg-blue-100" />
        <Section title="Sides" items={menuData.sides} />
        <Section title="Sweet Tooth" items={menuData.sweetTooth} />
      </div>

      <Footer/>
    </div>
  );
};

export default OurRestaurent;
