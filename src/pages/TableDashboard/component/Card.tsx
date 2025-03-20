import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../../../redux/actions/Users";
import Logo from "../../../assets/Logo.svg";
import Mail from "../../../assets/emailOne.png";
import Person from "../../../assets/person.png";
import Company from "../../../assets/company.png";

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

  const { nameCount, companyCount, emailDomainCount } = data
    ? UserData(data)
    : { nameCount: 0, companyCount: 0, emailDomainCount: 0 };

  return (
    <div className="">
      <div>
        <img src={Logo} alt="logo" className="w-56 py-5 px-7" />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1  gap-4">
        <CardComponent
          title="Names"
          value={nameCount}
          bgColor="bg-purple-50"
          Image={Person}
        />
        <CardComponent
          title="Companies"
          value={companyCount}
          bgColor="bg-orange-50"
          Image={Company}
        />
        <CardComponent
          title="Emails"
          value={emailDomainCount}
          bgColor="bg-blue-50"
          Image={Mail}
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
      <div className="bg-primary px-6 md:px-8 lg:px-10 grid grid-cols-2 md:grid-cols-2 rounded-md shadow-md shadow-white items-center justify-between p-4 md:p-6 lg:p-8 w-full">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-sm md:text-lg lg:text-xl text-gray-50 font-medium mt-2">
            {title}
          </h3>
          <p className="text-xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
            {value}
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={Image}
            alt={title}
            className="w-10 h-10 md:w-20 md:h-20 lg:w-24 lg:h-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
