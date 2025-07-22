import { toast } from "sonner";

type ToastType = "info" | "success" | "warning" | "error";

interface ToastOptions {
    description?: string;
    type?: ToastType;
}

export const useToast = () => {
    const showToast = (message: string, options?: ToastOptions) => {
        const { description, type = "info" } = options || {};
        toast[type](message, { description });
    };

    return { showToast };
};