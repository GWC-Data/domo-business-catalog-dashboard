import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../../../redux/actions/Users";
import Logo from "../../../assets/Logo.svg";
// import Mail from "../../../assets/emailOne.png";
import Person from "../../../assets/person.png";
// import Company from "../../../assets/company.png";

const Card: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { data } = useSelector((state: any) => state.user);

  useEffect(() => {
    dispatch(userDetails());
  }, [dispatch]);

  const UserData = (users: any[]) => {
    let nameCount = 0;
    let uniqueCompanies = new Set<string>();
    let uniqueEmailDomains = new Set<string>();

    users.forEach((user) => {
      if (user.name) nameCount++;

      if (user.company) {
        uniqueCompanies.add(user.company);
      }

      if (user.email) {
        const domain = user.email.split("@")[1];
        if (domain) {
          uniqueEmailDomains.add(domain);
        }
      }
    });

    return {
      nameCount,
      companyCount: uniqueCompanies.size,
      emailDomainCount: uniqueEmailDomains.size,
    };
  };

  const { nameCount } = data
    ? UserData(data)
    : { nameCount: 0 };
  // const { nameCount, companyCount, emailDomainCount } = data
  //   ? UserData(data)
  //   : { nameCount: 0, companyCount: 0, emailDomainCount: 0 };

  return (
    <div className="">
      <div className="flex justify-between items-center md:items-center md:flex-row flex-col">
        <img src={Logo} alt="logo" className="w-56 py-5 px-7" />
        <div className="text-xl font-bold md:mb-0 mb-5">Domo Business Catalogue</div>
      </div>
      <div className="max-w-[250px] mx-auto">

        <CardComponent
          title="Users"
          value={nameCount}
          bgColor="bg-purple-50"
          Image={Person}
        />
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  value: number;
  bgColor: string;
  Image: string;
  image?: string;
}

const CardComponent: React.FC<CardProps> = ({ title, value, Image }) => {
  return (
    <div className="w-full rounded-md">
      <div className="bg-primary p-4 rounded-md shadow-md shadow-white flex items-center justify-between w-full">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl text-gray-50 font-medium mt-2">
            {title}
          </h3>
          <p className="text-xl font-extrabold text-white mt-2">
            {value}
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={Image}
            alt={title}
            className="w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
