import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { login } from "../store/slices/auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function SigninPage() {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    image: "",
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);

  const prevPathname = location.state?.pathname || "/";

  useEffect(() => {
    if (user.authUser) {
      navigate(prevPathname, { replace: true });
    }
  }, [user.authUser, navigate, prevPathname]);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <>
      <div className="w-full h-fit flex justify-center items-center mt-20">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            className="mb-4 grid h-28 place-items-center text-white-100 bg-black"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Name"
              size="lg"
              name="name"
              value={values.name}
              onChange={(e) => handleChange(e)}
            />
            <Input
              label="(optional) Image URL"
              size="lg"
              name="image"
              value={values.image}
              onChange={(e) => handleChange(e)}
            />
            <Input
              label="Email"
              size="lg"
              name="email"
              value={values.email}
              onChange={(e) => handleChange(e)}
            />
            <Input
              label="Password"
              size="lg"
              name="password"
              value={values.password}
              onChange={(e) => handleChange(e)}
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              className="border border-black text-white-100"
              id="signin"
              onClick={() => {
                dispatch(login(values));
              }}
            >
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="black"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
