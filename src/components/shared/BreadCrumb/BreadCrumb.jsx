import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Slash} from "lucide-react";
import React from "react";
import {useLocale} from "next-intl";

export const BreadCrumb = ({items}) => {
    const locale = useLocale();
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {items?.map((item, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && (
                            <BreadcrumbSeparator>
                                <Slash/>
                            </BreadcrumbSeparator>
                        )}
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                href={`/${locale}${item.link.startsWith('/') ? '' : '/'}${item.link}`}
                                className={`${index === 0 ? "text-border_brown text-body3 font-normal hover:text-black" : "text-button font-normal text-body3 hover:text-black"}`}
                            >
                                {item.name}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
