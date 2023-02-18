import Input, { Props } from "../../../../components/atoms/Input";
import { Meta } from "@storybook/react";

const stories = {
  title: "Components/Atoms/Input",
  component: Input,
};

export default stories as Meta;

const Template = (args: Props) => <Input {...args} />;

export const Default = Template.bind({});
