import Button from './Button';
import Input from './Input';
import Title from './Title';

const Form = () => {
  return (
    <form>
      <Title cor="purple" texto="Titulo">
        Children!
      </Title>
      <Input label="Email" id="email" required />
      <Input label="Password" id="password" type="Password" />
      <Button />
    </form>
  );
};
export default Form;
