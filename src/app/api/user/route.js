import { NextResponse,NextRequest } from "next/server";
import prisma from "../../../server/prisma";

export async function POST(req) {

    try {
        const data = await req.json();
        console.log(data)
        const {name, email, group} = data
        const newRecord = await prisma.user.create({
            data: {
                email: email,
                name: name,
                group: group
            }
        });
        return NextResponse.json(newRecord);
    } catch (error){
        console.log(error);
    }

}

