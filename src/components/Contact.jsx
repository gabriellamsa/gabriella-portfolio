import { contact } from "../assets/data/data";

export const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{contact.address}</p>
      </div>
    </div>
  );
};
