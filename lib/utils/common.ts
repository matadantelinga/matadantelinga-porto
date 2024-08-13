import { toast } from "react-toastify";
import { EAlertTypeEnum } from "../enums/eAlertTypeEnums";

export const showToast = (
  type: EAlertTypeEnum,
  message: string,
  toastId: string,
  duration?: number
) => {
  const options = {
    autoClose: duration ?? 3000,
    toastId: type + toastId,
  };

  if (!toast.isActive(toastId)) {
    switch (type) {
      case EAlertTypeEnum.SUCCESS:
        toast.success(message, options);
        break;
      case EAlertTypeEnum.ERROR:
        toast.error(message, options);
        break;
      case EAlertTypeEnum.INFO:
        toast.info(message, options);
        break;
      case EAlertTypeEnum.WARNING:
        toast.warn(message, options);
        break;
      default:
        toast(message, options);
        break;
    }
  }
};
