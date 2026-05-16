import { Haptics, ImpactStyle } from "@capacitor/haptics";

export async function hapticTap() {
  try {
    await Haptics.impact({ style: ImpactStyle.Light });
  } catch {
    // Not available on web — silently ignore
  }
}

export async function hapticSuccess() {
  try {
    await Haptics.notification({ type: "SUCCESS" as never });
  } catch {
    // Not available on web
  }
}
