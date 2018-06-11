import { ticketingTypes } from "./ticketing.types";

export const addItem = (amount: number, date: string, description: string, title: string) => {
  return {
    payload: {
      amount,
      date,
      description,
      title,
    },
    type: ticketingTypes.ADD_ITEM,
  }
}

export const clearItems = () => {
  return {
    payload: {
      items: [],
    },
    type: ticketingTypes.CLEAR_ITEMS
  }
}

export const updateAmount = (amount: number) => {
  return {
    payload: {
      amount
    },
    type: ticketingTypes.UPDATE_AMOUNT,
  }
}

export const updateDate = (date: string) => {
  return {
    payload: {
      date
    },
    type: ticketingTypes.UPDATE_DATE,
  }
}

export const updateDescription= (description: string) => {
  return {
    payload: {
      description
    },
    type: ticketingTypes.UPDATE_DESCRIPTION,
  }
}

export const updateTitle = (title: string) => {
  return {
    payload: {
      title
    },
    type: ticketingTypes.UPDATE_TITLE,
  }
}