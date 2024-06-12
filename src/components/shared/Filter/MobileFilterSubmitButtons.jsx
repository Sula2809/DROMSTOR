import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export const SubmitButtons = ({ reset, submit }) => {
  const t = useTranslations("Product");
  return (
    <div className="flex items-center justify-center space-x-5 w-full">
      <Button
        className={`rounded-full bg-button-hover hover:bg-button-hover lg:bg-button`}
        onClick={reset}
      >
        {t("reset")}
      </Button>
      <Button
        className={`rounded-full bg-button hover:bg-button lg:bg-button-hover`}
        onClick={submit}
      >
        {t("submit")}
      </Button>
    </div>
  );
};
