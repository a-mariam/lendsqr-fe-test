import React from 'react'
import '@/testing-library/react'
import { render, screen } from '@testing-library/react';
import Home from "@/app/page";

describe('login', () => {

    test('home page exist', ()=> {
         render(<Home />);
        expect(screen.getByTestId('home')).toBeInTheDocument();
    })
})