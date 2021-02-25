import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form>
      <Input label="Email" id="email" required />
      <Input label="Password" id="password" type="Password" />
      <Button />
    </form>
  );
};
export default Form;
