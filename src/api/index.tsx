export const apiGet = async (url: string) => {
  try {
    await fetch(url,  {
      method: "GET"
    })
  } catch (e) {
    return;
  }
}

export const apiPost = async (url: string) => {
  try {
    await fetch(url,  {
      method: "POST"
    })
  } catch (e) {
    return;
  }
}

export const apiDelete = async (url: string) => {
  try {
    await fetch(url,  {
      method: "DELETE"
    })
  } catch (e) {
    return;
  }
}
