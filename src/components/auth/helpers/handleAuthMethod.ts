export const handleAuthMehtod = async (
  setAuthStatus: (state: (prev: any) => any) => void,
  callback: () => Promise<any>,
  onAuthResultMessage: string,
  navigate: () => void,
) => {
  try {
    setAuthStatus((prev: any) => ({
      ...prev,
      isLoading: true,
      isError: false,
      message: "",
    }));
    await callback();
    setAuthStatus((prev: any) => ({
      ...prev,
      message: onAuthResultMessage,
    }));

    navigate();
  } catch (e: any) {
    setAuthStatus((prev: any) => ({
      ...prev,
      message: e.message,
      isError: true,
    }));
  } finally {
    setAuthStatus((prev: any) => ({ ...prev, isLoading: false }));
  }
};
