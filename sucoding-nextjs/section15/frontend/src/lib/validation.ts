/**
 * 이메일 형식이 유효한지 검증합니다.
 * @param email - 검증할 이메일 문자열
 * @returns 유효하면 true, 아니면 false
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") {
    return false;
  }

  const trimmedEmail = email.trim();

  if (trimmedEmail.length === 0 || trimmedEmail.length > 254) {
    return false;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(trimmedEmail);
}

/**
 * 이메일 유효성을 검사하고 에러 메시지를 반환합니다.
 * @param email - 검증할 이메일 문자열
 * @returns 에러 메시지 (유효하면 빈 문자열)
 */
export function validateEmail(email: string): string {
  const trimmed = email.trim();

  if (!trimmed) {
    return "이메일을 입력해주세요.";
  }

  if (!isValidEmail(trimmed)) {
    return "올바른 이메일 형식이 아닙니다.";
  }

  return "";
}

/**
 * 비밀번호 강도를 검증합니다.
 * @param password - 검증할 비밀번호 문자열
 * @returns 에러 메시지 (유효하면 빈 문자열)
 */
export function validatePassword(password: string): string {
  if (!password) {
    return "비밀번호를 입력해주세요.";
  }

  // 선택: 비밀 번호 길이 제한
  // if (password.length < 8) {
  //   return "비밀번호는 최소 8자 이상이어야 합니다.";
  // }

  // if (password.length > 100) {
  //   return "비밀번호는 100자를 초과할 수 없습니다.";
  // }

  // 선택: 더 강력한 비밀번호 규칙 (영문, 숫자, 특수문자 포함)
  // const hasLetter = /[a-zA-Z]/.test(password);
  // const hasNumber = /[0-9]/.test(password);
  // const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // if (!hasLetter || !hasNumber) {
  //   return "비밀번호는 영문과 숫자를 포함해야 합니다.";
  // }

  return "";
}

/**
 * 비밀번호 확인이 일치하는지 검증합니다.
 * @param password - 원본 비밀번호
 * @param confirmPassword - 확인 비밀번호
 * @returns 에러 메시지 (유효하면 빈 문자열)
 */
export function validatePasswordConfirm(
  password: string,
  confirmPassword: string,
): string {
  if (!confirmPassword) {
    return "비밀번호 확인을 입력해주세요.";
  }

  if (password !== confirmPassword) {
    return "비밀번호가 일치하지 않습니다.";
  }

  return "";
}

/**
 * 이름(닉네임)을 검증합니다.
 * @param name - 검증할 이름 문자열
 * @returns 에러 메시지 (유효하면 빈 문자열)
 */
export function validateName(name: string): string {
  const trimmed = name.trim();

  if (!trimmed) {
    return "이름을 입력해주세요.";
  }

  if (trimmed.length < 2) {
    return "이름은 최소 2자 이상이어야 합니다.";
  }

  if (trimmed.length > 50) {
    return "이름은 50자를 초과할 수 없습니다.";
  }

  // 선택: 특수문자 제한
  // const invalidChars = /[<>'"\/\\{}()]/;
  // if (invalidChars.test(trimmed)) {
  //   return "이름에 사용할 수 없는 문자가 포함되어 있습니다.";
  // }

  return "";
}

/**
 * 회원가입 폼 전체를 검증합니다.
 * @param data - 검증할 폼 데이터
 * @returns 에러 메시지 (유효하면 빈 문자열)
 */
export function validateSignupForm(data: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}): string {
  // 순서대로 검증
  const nameError = validateName(data.name);
  if (nameError) return nameError;

  const emailError = validateEmail(data.email);
  if (emailError) return emailError;

  const passwordError = validatePassword(data.password);
  if (passwordError) return passwordError;

  const confirmError = validatePasswordConfirm(
    data.password,
    data.confirmPassword,
  );
  if (confirmError) return confirmError;

  return "";
}
