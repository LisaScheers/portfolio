import CaptchaProvider from "@/components/captcha";
import { type PropsWithChildren } from "react";

export default function HireMeLayout(props: PropsWithChildren) {
  return <CaptchaProvider>{props.children}</CaptchaProvider>;
}
