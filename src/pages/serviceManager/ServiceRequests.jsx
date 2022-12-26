import React, { useState, useEffect } from 'react'
import TableComponent from '../../components/TableComponent'
import * as URL from '../../utils/apiEndpoints'
import { adminApi, authToken } from '../../axios'

const ServiceRequests = () => {
  const [state, setState] = useState({
    loading: false,
    serviceRequests: [],
    categories: [],
  })

  useEffect(() => {
    fetchRequests()
    fetchCategories()
    fetchCustomers()
    fetchAllStatus()
  }, [])

  const fetchCategories = () => {
    adminApi
      .get(URL.GET_SERVICE_CATEGORIES, authToken)
      .then((res) => setState((prev) => ({ ...prev, categories: res.data })))
  }

  const fetchAllStatus = () => {
    adminApi
      .get(URL.ALL_STATUS, authToken)
      .then((res) => setState((prev) => ({ ...prev, status: res.data })))
  }

  const fetchCustomers = () => {
    adminApi
      .get(URL.FILTER_CUSTOMERS, authToken)
      .then((res) => setState((prev) => ({ ...prev, customers: res.data })))
  }

  const fetchRequests = () => {
    adminApi
      .get(URL.SERVICE_REQUEST, authToken)
      .then((res) => setState((prev) => ({ ...prev, serviceRequests: res.data })))
      .catch((e) => console.log(e))
  }

  return (
    <div>
      <h2>Service Requests</h2>
      <TableComponent type='serviceRequests' array={state.serviceRequests} />
    </div>
  )
}

export default ServiceRequests
