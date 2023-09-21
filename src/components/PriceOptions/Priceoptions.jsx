// @ts-nocheck
import PriceOption from "../PriceOption/PriceOption";

const Priceoptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$29.99/month",
      features: [
        "Access to gym facilities",
        "Cardio equipment",
        "Locker room access",
        "Personal trainer consultation (1 session/month)",
        "Fitness assessment",
        "Discounts on gym merchandise",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: "$49.99/month",
      features: [
        "All Basic Membership features",
        "Group fitness classes (3 sessions/week)",
        "Sauna and steam room access",
        "Discounts on personal training sessions",
        "Access to indoor basketball court",
        "Monthly progress tracking",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: "$79.99/month",
      features: [
        "All Standard Membership features",
        "Unlimited group fitness classes",
        "Access to swimming pool",
        "Nutrition consultation (1 session/month)",
        "Access to outdoor tennis courts",
        "Complimentary massage (1 session/month)",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl text-center mb-20">Best Prices in the town</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Priceoptions;
