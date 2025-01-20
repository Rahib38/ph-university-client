import { TQueryParam } from './../../../types/global';
import { TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagementType";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if(args){
          args.forEach((item:TQueryParam )=> {

            
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        console.log("inside redux", response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemesters: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    getAllAcademicDepartment: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if(args){
          args.forEach((item:TQueryParam )=> {

            
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/academic-departments",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        console.log("inside redux", response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: data,
      }),
    }),
    getAllAcademicFaculty: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if(args){
          args.forEach((item:TQueryParam )=> {

            
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/academic-faculties",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        console.log("inside redux", response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculties/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useGetAllSemestersQuery, useAddAcademicSemestersMutation,useAddAcademicDepartmentMutation,useGetAllAcademicDepartmentQuery, useAddAcademicFacultyMutation, useGetAllAcademicFacultyQuery } =
  academicManagementApi;
